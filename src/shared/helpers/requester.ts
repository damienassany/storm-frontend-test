class Requester {
    private url = "http://localhost:4000";

    public get<T>(url: string): Promise<T> {
        return fetch(`${this.url}${url}`).then(res => res.json());
    }
}

const requester = new Requester();

export { requester };