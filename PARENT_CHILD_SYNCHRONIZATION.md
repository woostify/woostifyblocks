# Parent-Child Block Synchronization Pattern

## Tổng quan

Dự án đã được cải tiến để áp dụng pattern parent-child synchronization tương tự như relationship giữa `block-icon-list` và `block-icon` cho cặp `block-slider` và `block-slider-child`.

## Cách hoạt động

### 1. Block Icon List & Block Icon (Mô hình tham khảo)

#### Parent Block (icon-list):
- Sử dụng `useInnerBlocksProps` và `InnerBlocks` để quản lý children
- Lấy danh sách child block IDs thông qua `useSelect(getBlockOrder)`
- Khi thay đổi style, đồng bộ với tất cả children via `updateBlockAttributes`

```typescript
// Ví dụ synchronization trong icon-list
setAttr__={(data) => {
    setAttributes({ style_title: data });
    // Update title style for all child blocks
    innerBlockClientIds.forEach((childId) => {
        updateBlockAttributes(childId, { 
            style_title: data,
        });
    });
}}
```

#### Child Block (icon):
- Sử dụng `useParentContext` để detect parent block
- Có thể hoạt động độc lập hoặc inherit từ parent

```typescript
const { isChildOfIconList, parentAttributes } = useParentContext(clientId);
```

### 2. Block Slider & Block Slider Child (Cải tiến mới)

#### Các thay đổi đã thực hiện:

##### A. Tạo useParentContext cho slider-child:
```typescript
// src/block-slider-child/useParentContext.tsx
export const useParentContext = (clientId: string) => {
    // ... detect parent slider block
    const isChildOfSlider = parentBlock?.name === "wcb/slider";
    return { isChildOfSlider, parentAttributes };
};
```

##### B. Cập nhật Parent Block (slider):
- Thêm parent-child synchronization
- Khi thay đổi style, update tất cả children:

```typescript
setAttr__={(data) => {
    setAttributes({ style_name: data });
    // Update name style for all child blocks
    innerBlockClientIds.forEach((childId) => {
        updateBlockAttributes(childId, { 
            style_name: data,
        });
    });
}}
```

##### C. Cập nhật Child Block (slider-child):
- Thêm style attributes để có thể inherit từ parent
- Sử dụng parent context để hiển thị appropriate controls
- Apply inherited styles thông qua GlobalCss

```typescript
// Inherit styles from parent when available
{isChildOfSlider && parentAttributes && (
    <GlobalCss 
        uniqueId={uniqueId}
        style_name={parentAttributes.style_name || style_name}
        style_content={parentAttributes.style_content || style_content}
        // ... other inherited styles
    />
)}
```

##### D. Enhanced Inspector Controls:
- Child blocks hiển thị notification khi inherit từ parent
- Simplified controls khi là child of slider
- Full controls khi standalone

## Lợi ích

### 1. User Experience tốt hơn:
- Style consistency: Tất cả slider items có cùng styling
- Centralized control: Chỉnh style ở parent, tự động apply cho tất cả children
- Less confusion: Ít controls duplicate, UX cleaner

### 2. Developer Experience:
- Maintainable code: Pattern consistent giữa các block types
- Reusable: Pattern có thể apply cho other parent-child relationships
- Flexible: Child blocks vẫn có thể override khi cần

### 3. Performance:
- Efficient: Không cần manually update từng child
- Batch updates: Tất cả children update cùng lúc

## Ví dụ sử dụng

1. **Tạo Slider Block**: Add slider block vào page
2. **Add Slider Items**: Slider tự động có 3 items, có thể add thêm
3. **Style từ Parent**: 
   - Chọn parent slider block
   - Adjust typography, colors, spacing ở Style panels
   - Tất cả slider items sẽ automatically inherit những styles này
4. **Individual Content**: Click vào individual slider item để edit content riêng

## Technical Notes

### Inheritance Priority:
1. Parent attributes (khi available)
2. Child's own attributes (fallback)
3. Default values

### Inspector Controls Logic:
```typescript
// Chỉ show parent controls khi cần thiết
const shouldShowParentControls = isSelected || (!isChildBlockSelected && selectedBlockClientId === clientId);

// Show inheritance info cho children
{isChildOfSlider && (
    <p>This slide inherits styles from the parent Slider block...</p>
)}
```

Cải tiến này tạo ra một experience nhất quán và intuitive cho users khi làm việc với nested blocks. 