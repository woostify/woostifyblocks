import React from "react";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as noticeStore } from "@wordpress/notices";
import { useInstanceId } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

interface params {
	ComponentName: React.FC<any>;
	uniqueNoticeId: string;
}

export default function useRedirectionPreventedNotice({
	ComponentName,
	uniqueNoticeId,
}: params) {
	const { createWarningNotice, removeNotice } = useDispatch(noticeStore);
	let noticeId;
	const instanceId = useInstanceId(ComponentName);
	const showRedirectionPreventedNotice = (event) => {
		event.preventDefault();
		// Remove previous warning if any, to show one at a time per block.
		removeNotice(noticeId);
		noticeId = `${uniqueNoticeId}/${instanceId}`;
		createWarningNotice(__("Links are disabled in the editor."), {
			id: noticeId,
			type: "snackbar",
		});
	};
	return {
		showRedirectionPreventedNotice,
	};
}
