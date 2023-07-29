=== Todo List ===
Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.0
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Example static block scaffolded with Create Block tool.

== Description ==

This is the long description. No limit, and you can use Markdown (as well as in the following sections).

For backwards compatibility, if this section is missing, the full length of the short description will be used, and
Markdown parsed.

== Installation == 
 1: npm i / yarn i
 2: yarn start
 3: for zip plugin: yarn plugin-zip

== DEV == 
***** 1 - Cấu trúc
* Tất cả các khối đã build/ sắp build sẽ cần nằm trong 1 thư mục có tiền tố "block-" ở đầu. Có thể xem các khối có sẵn trong thư mục src.
* Đã có sẵn một khốI mặc định __default: Đây là khối boilepelate, khi bạn muốn tạo một khối mới bạn chỉ cần copy khối naỳ và sửa lại tên, ...
* Thư mục block-common-css là một khối đăng ký để tải CSS chung cho các khối (TAILWINDCSS,...), và import lazy các file JavaScript frontend.(Đọc thêm ở dưới)
* Thư mục __dashboard: Nơi xây dựng trang dashboard Wcb-settings
* Thư mục __toolbar-partterns: Nơi xây dựng nút WCB-partterns ở trong editor
* Thư mục components: Chứa các components control settings để setings trong các khối. Nên giữ cho các control components này càng đơn giản càng tốt, 
không nên lạm dụng mà để nhiều Fields setting, điều này sẽ khiến nhiều khôi bị ảnh hưởng khi có bất kỳ sự thay đổi.  
* hooks/ utils ...

***** 2 - Bên trong các khối block-*
* Các file attributes.ts, block.json, ... : Vui lòng đọc hướng dẫn của WordPress về Gutenberg ở đây - https://developer.wordpress.org/block-editor/getting-started/create-block/
* GlobalCss.tsx: Đây là file sử dụng package @emotion/react để render styles cho khối, dữ liệu dựa vào attributes setting của khối. Lưu ý, file này sẽ chạy cả trên editor và cả ngoài trang UI frontend. 
* FrontendStyles.tsx: Đây sẽ là file JavaScript của khối, và sẽ chạy ở phía UI client. Chỉ những khối cần sử dụng JavaScript như: Slider, Collapse, Tabs..
Khi bạn tạo khối mới và cần đăng hàm JavaScript trong FrontendStyles.tsx, thì bạn cần phải đăng ký hàm đó vào file block-common-css/FrontendStyles.tsx.
Tôi import lazy tất cả các file JavaScript vào  block-common-css/FrontendStyles.tsx để tối ưu việc enqueuescript.

***** 3 - Đăng ký khối với WordPress
** Sau khi tạo khối, chạy lệnh "run start" để phát triển, khi đó trong thu mục build sẽ build ra 1 thư mục có cùng tên với tên block, 
bây giờ bạn cần phải đăng ký khối trong file includes/wcb-register-blocks.php

***** 4 - Cách cấu trúc và viết mã PHP
* Dự án sự dụng khá ít PHP, vì vậy PHP chủ yếu sẽ được viết theo phong cách HƯỚNG CHỨC NĂNG (FUNCTIONAL),
có nghĩa là không sử dụng Class, toàn bộ là các PHP functions. Tất cả các file PHP sẽ đều được import vào file woostifyblocks.php  
Bạn có thể thấy toàn bộ file PHP đều nằm trong thư mục /includes


***** 5 - Xây dựng/Tuỳ chỉnh khối

* uniqueId: Cần phải lưu clientId vào biến uniqueId, điều này để @emotion/react sử dụng làm css selector.
* renderTabBodyPanels: Nơi đây sẽ render các InspectorControls cho các khối. 
* HOCInspectorControls: HOC component để tuỳ chỉnh các tabInspectorControls cho các khối. InspectorControls của mối khối sẽ có tối đa 3 tab: General, Styles, Advances
* Save: Trong tất cả các hàm Save của các khối đều sử dụng SaveCommon. SaveCommon sẽ là cấu trúc bao bọc chung cho các khối khi render ra ngoài frontend. 
Các khối sẽ render ra dữ liệu blockJson là các attributes data về style, và GlobalCss.tsx sẽ lấy dữ liệu đó để chạy ngoài frontend.  
