export type LabelProps = {
	title: string
	htmlFor: string
}
export interface IRegFrom {
	email: string
	password: string
}
export type StoreState = {
	currentUser: null | object
	isLoading: boolean
	getUser: (uid: string) => void
}
