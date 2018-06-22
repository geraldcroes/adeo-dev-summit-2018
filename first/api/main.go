package main // import "github.com/juliens/demo"

import "fmt"
import "net/http"

func main() {
	http.ListenAndServe(":80", http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		rw.Header().Set("Access-Control-Allow-Origin", "*")
		rw.WriteHeader(200)
		fmt.Fprintf(rw, "{\"test\":\"toto\"}")
	}))
}
