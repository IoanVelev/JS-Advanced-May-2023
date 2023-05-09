function roadRadar(speed, area) {
    switch (area) {
        case 'city': {
            let speedLimit = 50;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedDiff = Math.abs(speedLimit - speed);
                if (speedDiff <= 20) {
                    let status = `speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (speedDiff >= 20 && speedDiff <= 40) {
                    let status = `excessive speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    let status = `reckless driving`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        }
        case 'motorway': {
            speedLimit = 130;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedDiff = Math.abs(speedLimit - speed);
                if (speedDiff <= 20) {
                    let status = `speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (speedDiff >= 20 && speedDiff <= 40) {
                    let status = `excessive speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    let status = `reckless driving`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        }
        case 'interstate': {
            speedLimit = 90;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedDiff = Math.abs(speedLimit - speed);
                if (speedDiff <= 20) {
                    let status = `speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (speedDiff >= 20 && speedDiff <= 40) {
                    let status = `excessive speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    let status = `reckless driving`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        }
        case 'residential': {
            speedLimit = 20;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedDiff = Math.abs(speedLimit - speed);
                if (speedDiff <= 20) {
                    let status = `speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (speedDiff >= 20 && speedDiff <= 40) {
                    let status = `excessive speeding`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    let status = `reckless driving`;
                    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        }
    }
}
roadRadar(21, 'residential')