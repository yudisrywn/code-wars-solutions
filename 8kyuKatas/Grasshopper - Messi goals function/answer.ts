/*
Messi pemain bola harus mengembalikan total semua nilai dari gol dia.
*/


export function goals(
  laLigaGoals: number,
  copaDelReyGoals: number,
  championsLeagueGoals: number,
): number {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
