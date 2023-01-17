// 驼峰转下划线
const toUnderLine = (data: string) => {
    return data.replace(/([A-Z])/g, '_$1').toLowerCase();
};
const HumpToUnderline = (obj: any) => {
    if (Array.isArray(obj)) {
        obj.forEach((v) => {
            HumpToUnderline(v);
        });
    }
    else if (obj instanceof Object) {
        Object.keys(obj).forEach((key) => {
            const newKey = toUnderLine(key);
            if (newKey !== key) {
                obj[newKey] = obj[key];
                delete obj[key];
            }
            HumpToUnderline(obj[newKey]);
        });
    }
    return obj;
};
// 下划线转驼峰
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
