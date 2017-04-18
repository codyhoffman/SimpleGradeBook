var gradeBook = {
	_grades: [],

	addGrade: function(newGrade) {
		this._grades.push(newGrade);
	},

	getCountOfGrades: function() {
		return this._grades.length;
	},
	
	getAverage: function() {
		var avg = 0;
		for(var i=0; i < this._grades.length; i++) {
			avg += this._grades[i];
		}
		return avg / this._grades.length;
	},

	reset: function() {
		this._grades = [];
	},

	getLetterGrade: function() {
		var totalGrade = this.getAverage();
		
			if (totalGrade >= 90) {
				return 'A';
			}
			else if (totalGrade >= 80) {
				return 'B';
			}
			else if (totalGrade >= 70) {
				return 'C';
			}
			else if (totalGrade >= 60) {
				return 'D';
			}
			else {
				return 'F';
			}
	}
};
exports.book = gradeBook;
