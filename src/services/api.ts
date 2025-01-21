export const apiRequest = async (
    {
        url,
        method = "GET",
        body = null,
        headers = {"Content-Type": "application/json"}
    }: {
        url: string,
        method?: string,
        body?: object | null,
        headers?: HeadersInit
    }) => {
    console.log(`api :: apiRequest: ${method} ${url} \nheaders:${headers} \nbody: ${JSON.stringify(body)}`);

    const options: RequestInit = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            console.log(`api :: apiRequest: ${method} ${url} failed with status ${response.status} \n${response}`);
            throw new Error(`API error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            console.log(`api :: apiRequest: ${method} ${url} response: ${JSON.stringify(response)}`);
            return await response.json();
        }

        return null;  // For DELETE or successful POST with no body return
    } catch (error) {
        console.error(`api :: apiRequest: Error in API call: ${error}`);
        throw error;
    }
};
