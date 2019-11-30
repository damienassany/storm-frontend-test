class Requester {
    private url = "http://localhost:4000";

    public get<T>(url: string) {
        return fetch(`${this.url}${url}`).then<T>(res => res.json());
    }

    public patch<T>(url: string, data: Partial<T>) {
        return fetch(`${this.url}${url}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    public post<T>(url: string, data: Partial<T>) {
        return fetch(`${this.url}${url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
}

const requester = new Requester();

export { requester };