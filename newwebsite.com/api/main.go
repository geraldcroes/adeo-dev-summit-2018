package main // import "github.com/juliens/demo"

import (
	"net/http"
	"encoding/json"
	"fmt"
	"io"
	"crypto/rand"
	"encoding/base64"
)

var sessions = make(map[string]int)

func SessionId() string {
	b := make([]byte, 32)
	if _, err := io.ReadFull(rand.Reader, b); err != nil {
		return ""
	}
	return base64.URLEncoding.EncodeToString(b)
}

func main() {
	http.HandleFunc("/api/add",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		sessionCookie, err := req.Cookie("MY_SESSION")
		if err !=nil || sessionCookie.Value == "" {
			sessionId := SessionId()
			sessionCookie = &http.Cookie{Name: "MY_SESSION", Value: sessionId}
			http.SetCookie(rw, sessionCookie)
		}
		rw.WriteHeader(200)

		if _, ok := sessions[sessionCookie.Value]; ok {
			sessions[sessionCookie.Value]++
		} else {
			sessions[sessionCookie.Value] = 1
		}
		fmt.Fprint(rw, sessions[sessionCookie.Value])

	}))

	http.HandleFunc("/api/get",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		sessionCookie, err := req.Cookie("MY_SESSION")
		if err !=nil || sessionCookie.Value == "" {
			sessionId := SessionId()
			sessionCookie = &http.Cookie{Name: "MY_SESSION", Value: sessionId}
			http.SetCookie(rw, sessionCookie)
		}
		rw.WriteHeader(200)

		if _, ok := sessions[sessionCookie.Value]; ok {
		} else {
			sessions[sessionCookie.Value] = 0
		}
		fmt.Fprint(rw, sessions[sessionCookie.Value])

	}))

	http.HandleFunc("/api/articles",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		articles := []string{ "Cube 2x2 Moyu", "Gan 360 UM 3x3", "Moyu GTS 2M 3x3", "Moyu AoSu 4x4"}
		//encoder := json.NewEncoder(rw)
		//encoder.Encode(articles)
		json, err := json.Marshal(articles)
		if err != nil {
			rw.WriteHeader(500)
			fmt.Fprint(rw, err)
		}
		rw.Header().Set("Content-Type", "application/json")
		rw.WriteHeader(200)

		fmt.Fprint(rw, string(json))
	}))
	http.ListenAndServe(":80", nil)
}
