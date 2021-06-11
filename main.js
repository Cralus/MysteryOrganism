// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (specimineNum, dna) => {
	const pAequor ={
		_dna : dna,
		_specimineNum : specimineNum,
		get dna(){
			return this._dna;
		},
		set dna(arr){
			this._dna = arr;
		},
		get specimineNum(){
			return this._specimineNum;
		},
		set specimineNum(arr){
			this._specimineNum = arr;
		},
		mutate(){
		let dnaLoc = Math.floor(Math.random()*15)
		let selectedBase = dna[dnaLoc]
		let randBase = returnRandBase();
		if(randBase !== selectedBase)
		{
			dna[dnaLoc] = randBase;
		}
		else{
	
			this.mutate();
		}
		},
		compareDna(otherPAequor){
			let amountSimilar = 0
			for(let i = 0;i<15; i++)
			{
				if(this.dna[i] === otherPAequor.dna[i])
				{
					amountSimilar ++;
				}
			}
			return (amountSimilar/15) * 100

		},
		willLikelySurvive(){
			let numOfCG = 0;
			this.dna.forEach(base => {
				if(base === 'C' || base === 'G')
				{
					numOfCG ++;
				}
			})
			return (((numOfCG/15) * 100 )>60 )
		},
	};

	return pAequor;
}
let testGroup = []
for(let i = 0; testGroup.length < 30; i++)
{
	let possibleEntry = pAequorFactory(i, mockUpStrand())
	if(possibleEntry.willLikelySurvive())
	{
		testGroup.push(possibleEntry);
	}
}




