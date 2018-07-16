function factorial(N: number): number {
	if (N > 1) {
		return N * factorial(N - 1);
	} else {
		return N;
	}
}

console.log(factorial(5));
