import { serve } from "https://deno.land/x/net/http.ts";

const addr = "0.0.0.0:8080";
const s = serve(addr);

(async () => {
  for await (const req of s) {
    if (req.url === "/") {
      const contentType = req.headers.get("content-type");
      await req.respond({
        status: 200,
        headers: new Headers({
          "Content-Type": contentType
        }),
        body: new TextEncoder().encode("Hello, World")
      });
    }
  }
})();

console.log(`Server is runnning. Access to http://${addr}`);
