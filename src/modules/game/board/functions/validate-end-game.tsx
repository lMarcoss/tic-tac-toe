export function validateEndGame(squares: string[]): boolean {
	return squares.filter(square => square === '').length <= 0
}
