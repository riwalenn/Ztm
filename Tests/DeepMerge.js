let defaultParameter = {
    id: 1,
    userType: [],
    client: {
        id: null
    },
    test: false,
    access: {
        isForAssociation: false,
        isForEnterprise: false,
        isForFreelance: false,
        isForStructure: false,
        hasStructures: true,
    },
    orderFields: {
        field1: "order-3",
        field2: "order-4",
        field3: "order-5",
        field4: "order-0",
        field5: "order-2",
        field6: "order-2",
        field7: "order-6",
        field8: "order-7",
        field9: "order-8",
        field10: "order-7",
        field11: "order-8",
        field12: "order-8",
        field13: "order-9",
        field14: "order-10",
        field15: "order-11",
    }
}

const paramClients = [
    {
        id: 2,
        userType: ["enterprise"],
        client: {
            id: 88965
        },
        access: {
            isForEnterprise: true,
        },
    },
    {
        id: 3,
        userType: ["structure"],
        client: {
            id: 88965
        },
        access: {
            isForStructure: true,
            isForEnterprise: true,
        },
        orderFields: {
            field1: "order-0",
            field2: "order-1",
            field3: "order-2",
            field4: "order-3",
        }
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

function mergeDeep(target, source) {
    Object.keys(source).forEach((key) => {
        if (source[key] && typeof source[key] === 'object') {
            if (!target[key]) {
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