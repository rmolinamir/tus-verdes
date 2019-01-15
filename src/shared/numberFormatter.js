const nFormatter = (num) => {
    switch (true) {
        case Math.abs(num) >= 1000000000:
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        case Math.abs(num) >= 1000000:
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        case Math.abs(num) >= 1000:
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        default: 
            // Do nothing
    }
    return num;
}

export default nFormatter;