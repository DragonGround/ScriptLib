
/* MAIN */

const indexes = (str: string, substr: string): number[] => {

    const indexes: number[] = [];
    const substrLength = substr.length;

    let indexFrom = 0;

    while (true) {

        const index = str.indexOf(substr, indexFrom);

        if (index === -1) return indexes;

        indexes.push(index);

        indexFrom = index + substrLength;

    }

};

/* EXPORT */

export default indexes;