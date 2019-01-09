import { serve } from "https://deno.land/x/net/http.ts";

(async () => {
  for await (const req of serve("0.0.0.0:8080")) {
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
