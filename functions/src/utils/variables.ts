const get = (name: string) => {
    return process.env[name]
}

export default get