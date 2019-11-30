class Requester {
    private url = "http://localhost:4000";

    public get<T>(url: string) {
        return fetch(`${this.url}${url}`).then<T>(res => res.json());
    }
}

const requester = new Requester();

export { requester };