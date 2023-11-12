<script>
export function request(path="/users", method="GET", content)
{
    const BASE_URL = "http://localhost:4000/api"
    const OPTIONS = {
        method:method,
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(content)
    }
    return fetch(`${BASE_URL}${path}`,OPTIONS)
}
</script>