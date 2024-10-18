import { f } from "./callee"

export function g() {
	return { wrapper: f() }
}
