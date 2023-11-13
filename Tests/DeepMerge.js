let defaultParameter = {
    id: 1,
    userType: [],
    client: {
        id: null
    },
    test: false,
    name: "DEFAULT CLIENT NAME",
    testString: "TEST STRING",
    testEmptyString: "TEST EMPTY STRING",
    testEmptyObject: { step: 0 },
    testNull: { step: 0 },
    testNull2: 0,
    access: {
        isForAssociation: false,
        isForEnterprise: false,
        isForFreelance: false,
        isForStructure: false,
        hasStructures: true,
    },
    orderFields: {
        field1: "order-1",
        field2: "order-2",
        field3: "order-3",
        field4: "order-4",
        field5: "order-5",
        field6: "order-6",
        field7: "order-7",
        field8: "order-8",
        field9: "order-9",
        field10: "order-10",
        field11: "order-11",
        field12: "order-12",
        field13: "order-13",
        field14: "order-14",
        field15: "order-15",
    },
    modules: {
        module1: ['item1', 'item2','item3','item4','item5','item6','item7','item8'],
        module2: ['item1','item2','item3','item4','item5'],
        module3: ['item1','item2','item3'],
    },
}

const paramClients = [
    {
        id: 2,
        userType: ["enterprise"],
        name: "CLIENT ENTERPRISE NAME",
        testString: "DO NOT TEST STRING",
        testEmptyString: "",
        client: {
            id: 88965
        },
        access: {
            isForEnterprise: true,
        },
        modules: {
            module1: ['item1','item3','item5','item7'],
            module2: ['item1','item3','item5'],
            module3: ['item1','item3'],
        },
    },
    {
        id: 3,
        name: "CLIENT STRUCTURE NAME",
        testEmptyString: "", // return ""
        testEmptyObject: {}, // return {}
        testNull: {step: null}, // return {step:null}
        testNull2: null, // return null
        userType: ["structure"],
        client: {
            id: 88965
        },
        access: {
            isForStructure: true,
            isForEnterprise: true,
        },

        modules: {
            module1: ['item2','item4','item6','item8','item10','item12','item14','item16','item18','item20','item22'],
            module2: ['item2','item4'],
            module3: [], // return []
        },
        orderFields: {
            field1: "order-3",
            field2: "order-2",
            field3: "order-1",
            field4: "order-4",
        },
    },
    {
        id: 4,
        userType: ["structure", "enterprise"],
        client: {
            id: 158
        },
        access: {
            isForStructure: true,
            isForEnterprise: true,
        },
        orderFields: {
            field1: "order-0",
            field2: "order-0",
            field3: "order-0",
            field4: "order-1",
            field5: "order-3",
            field6: "order-4",
            field10: "order-3",
            field12: "order-4"
        }
    },
]

const user = {
    client: {
        id: 88965
    },
    role: "ADMINISTRATEUR"
}

function getParameterClientUserOrDefault(user) {
    if (user.role === "ADMINISTRATEUR") {
        const parameter = paramClients.find(param => {
            return param.client.id === user.client.id && param.userType.includes('structure');
        });

        return parameter !== undefined ? parameter : defaultParameter;
    } else {
        const parameter = paramClients.find(param => {
            return param.client.id === user.client.id && param.userType.includes('enterprise');
        });

        return parameter !== undefined ? parameter : defaultParameter;
    }
}

const userClientParameters = getParameterClientUserOrDefault(user);

/*
 * if array = [] then array will be empty
 * if array or object have values then it will overwrite the default parameter
 * if array or object does not exist then it will proceed the default parameter
 */
function mergeDeep(target, source) {
    function isArray(value) {
        return Array.isArray(value);
    }

    Object.keys(source).forEach((key) => {
        if (source[key] && typeof source[key] === 'object' && !isArray(source[key])) {
            if (!target[key] || Object.values(source[key]).length === 0) {
                Object.assign(target, { [key]: {} });
            }
            mergeDeep(target[key], source[key]);
        } else {
            Object.assign(target, { [key]: source[key] });
        }
    });
}

const mergedParameters = JSON.parse(JSON.stringify(defaultParameter));

mergeDeep(mergedParameters, userClientParameters);

console.log(mergedParameters);