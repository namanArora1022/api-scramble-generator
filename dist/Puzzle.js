"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puzzle = void 0;
var Puzzle = /** @class */ (function () {
    function Puzzle(length, range, puzzleType, scrambleList) {
        if (scrambleList === void 0) { scrambleList = []; }
        this.length = length;
        this.range = range;
        this.puzzleType = puzzleType;
        this.scrambleList = scrambleList;
    }
    Puzzle.prototype.scrambleGenrator = function () {
        var notationMatrix = [
            ["U", "U'", "U2"],
            ["D", "D'", "D2"],
            ["R", "R'", "R2"],
            ["L", "L'", "L2"],
            ["F", "F'", "F2"],
            ["B", "B'", "B2"],
            ["Uw", "Uw'", "Uw2"],
            ["Dw", "Dw'", "Dw2"],
            ["Rw", "Rw'", "Rw2"],
            ["Lw", "Lw'", "Lw2"],
            ["Fw", "Fw'", "Fw2"],
            ["Bw", "Bw'", "Bw2"],
            ["3Uw", "3Uw'", "3Uw2"],
            ["3Dw", "3Dw'", "3Dw2"],
            ["3Rw", "3Rw'", "3Rw2"],
            ["3Lw", "3Lw'", "3Lw2"],
            ["3Fw", "3Fw'", "3Fw2"],
            ["3Bw", "3Bw'", "3Bw2"],
        ];
        var notations = [];
        // returns a random integer from interval [a,b]
        function randint(a, b) {
            return Math.round(a + (b - a) * Math.random());
        }
        var i = 1;
        var lastIndex = null; // null is to avoid the typescript compliation error null will be never used 😅
        while (this.length >= i) {
            if (i == 1) {
                // making to 2 random integers for 2 indices of notationMatrix 
                var ran1_1 = randint(this.range[0] - 1, this.range[1] - 1);
                var ran2_1 = randint(0, 2);
                var notation = notationMatrix[ran1_1][ran2_1];
                notations.push(notation);
                lastIndex = ran1_1; // to not repeat the same notation type like R R2 , should not come together
                i++;
                continue;
            }
            // making to 2 random integers for 2 indices of notationMatrix 
            var ran1 = randint(this.range[0] - 1, this.range[1] - 1);
            var ran2 = randint(0, 2);
            // to not repeat the same notation type like R R2 , should not come together
            if (lastIndex != ran1) {
                var notation = notationMatrix[ran1][ran2];
                notations.push(notation);
                lastIndex = ran1;
            }
            else {
                continue;
            }
            i++;
        }
        // to convert array to notations to a single string
        return notations.join(' ');
    };
    return Puzzle;
}());
exports.Puzzle = Puzzle;
var puzzleTypeObject = [
    {
        length: 15,
        range: [1, 6],
        type: '2x2'
    },
    {
        length: 25,
        range: [1, 6],
        type: '3x3'
    },
    {
        length: 30,
        range: [1, 12],
        type: '4x4'
    },
    {
        length: 35,
        range: [1, 12],
        type: '5x5'
    },
    {
        length: 40,
        range: [1, 18],
        type: '6x6'
    },
    {
        length: 45,
        range: [1, 18],
        type: '7x7'
    }
];
var puzzleTypeMap = new Map();
for (var _i = 0, puzzleTypeObject_1 = puzzleTypeObject; _i < puzzleTypeObject_1.length; _i++) {
    var puzzleObj = puzzleTypeObject_1[_i];
    puzzleTypeMap.set(puzzleObj.type, puzzleObj);
}
exports.default = puzzleTypeMap;
