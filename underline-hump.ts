//下划线转驼峰
const toHump = (data: string) => {
    return data.replace(/_(\w)/g, (all, letter) => {
        return letter.toUpperCase();
    });
};
const UnderlineToHump = (obj: any) => {
    if (Array.isArray(obj)) {
        obj.forEach((v) => {
            UnderlineToHump(v);
        });
    }
    else if (obj instanceof Object) {
        Object.keys(obj).forEach((key) => {
            const newKey = toHump(key);
            if (newKey !== key) {
                obj[newKey] = obj[key];
                delete obj[key];
            }
            UnderlineToHump(obj[newKey]);
        });
    }
    return obj;
};