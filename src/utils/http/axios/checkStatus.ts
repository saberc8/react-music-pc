import { SessionTimeoutProcessingEnum } from '@/enums/appEnum'
export function checkStatus(status: number, msg: string): void {
	let errMessage = ''

	switch (status) {
		case 400:
			errMessage = `${msg}`
			break
		// 401: Not logged in
		// Jump to the login page if not logged in, and carry the path of the current page
		// Return to the current page after successful login. This step needs to be operated on the login page.
		case 401:
			errMessage = msg
			break
		default:
	}
	if (errMessage) {
		console.log('errMessage', errMessage, status)
	}
}
