export const res = {
    status: function (statusCode: number) {
        return this;
    },
    send: (r: any) => r,
} as any;

export const makeRes = () => {
    return {
        status: function (statusCode: number) {
            return this.bind(this);
        },
        send: (r: any) => r,
    } as any;
};
