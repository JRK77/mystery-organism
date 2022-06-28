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

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randBase = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randBase] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randBase] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      let simdna = 0
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrg.dna[i]) {
          simdna += 1;
        } else {
          continue;
        }
      }
      let percentsim = (simdna/this.dna.length * 100).toFixed(2);
      return `Specimen ${this.specimenNum} and specimen ${otherOrg.specimenNum} have ${percentsim}% of their DNA in common.`
    },
    willLikelySurvive() {
      const cOrg = this.dna.filter(base => base === "C" || base === "G");
      if (cOrg.length / this.dna.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}


const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());

console.log(pAequor1.compareDNA(pAequor2));
console.log(pAequor1.willLikelySurvive());






