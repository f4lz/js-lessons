const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    });

    return await res.json();
};

const getResources = async (url, data) => {
    const res = await fetch(url);

    if (!res.ok) {
       throw new Error(`Could nod fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResources};