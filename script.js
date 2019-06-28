function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];
    var weather = 0;


    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let YellowEaterCountElement = document.getElementById('YellowEaterCount');
    let PredatorCountElement = document.getElementById('PredatorCount');
    let FinalHeroCountElement = document.getElementById('FinalHeroCount');
    let weatherName = document.getElementById('weather');




    socket.on("data", drawCreatures);

    function myfunction() {

        if (weather >= 5 && weather < 10)
            weatherName.innerHTML = "Ամառ";
        else if (weather >= 10 && weather < 15) {
            weatherName.innerHTML = "Աշուն";
        }
        else if (weather >= 15 && weather <= 20) {
            weatherName.innerHTML = "Ձմեռ";
        }
        else if (weather < 5) {
            weatherName.innerHTML = "Գարուն";
        }
    }

    function drawCreatures(data) {

        matrix = data.matrix;
        weather = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        YellowEaterCountElement.innerText = data.YellowEaterCounter;
        PredatorCountElement.innerText = data.PredatorCounter;
        FinalHeroCountElement.innerText = data.FinalHeroCounter;
        weatherName.innerText = data.weather;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                myfunction()
                if (weather >= 5 && weather < 10)

                    if (matrix[i][j] == 1) {
                        fill("green");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('red');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('blue');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('yellow');
                        rect(j * side, i * side, side, side);
                    }
                if (weather >= 10 && weather < 15) {
                    if (matrix[i][j] == 1) {
                        fill(234, 237, 73);
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('red');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('blue');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('yellow');
                        rect(j * side, i * side, side, side);
                    }
                }
                if (weather >= 15 && weather <= 20) {
                    if (matrix[i][j] == 1) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('red');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('blue');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('yellow');
                        rect(j * side, i * side, side, side);
                    }
                }
                if (weather < 5) {
                    if (matrix[i][j] == 1) {
                        fill(119, 249, 117);
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('red');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('blue');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('yellow');
                        rect(j * side, i * side, side, side);
                    }
                }

            }
        }
    }
}