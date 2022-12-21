import { useUserStoreWithOut } from '@/store/modules/user'
import projectSetting from '@/settings/projectSetting'
import { SessionTimeoutProcessingEnum } from '@/enums/appEnum'
const error = createMessage.error!
const stp = projectSetting.sessionTimeoutProcessing

export function checkStatus(status: number, msg: string): void {
	const userStore = useUserStoreWithOut()
	let errMessage = ''

	switch (status) {
		case 400:
			errMessage = `${msg}`
			break
		// 401: Not logged in
		// Jump to the login page if not logged in, and carry the path of the current page
		// Return to the current page after successful login. This step needs to be operated on the login page.
		case 401:
			userStore.setToken(undefined)
			errMessage = msg
			if (stp === SessionTimeoutProcessingEnum.PAGE_COVERAGE) {
				userStore.setSessionTimeout(true)
			} else {
				userStore.logout(true)
			}
			break
		default:
	}

	if (errMessage) {
		console.log('errMessage', errMessage, status)
	}
}
