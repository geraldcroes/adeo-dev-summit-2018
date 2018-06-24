package main // import "github.com/juliens/demo"

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
	"time"
)

func main() {
	handler := http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		upgrader := websocket.Upgrader{
			CheckOrigin: func (r *http.Request) bool {
				return true
			},
		}
		conn, err := upgrader.Upgrade(rw, r, nil)
		if err != nil {
			fmt.Println(err)
		}

		timer := time.Tick(time.Second*3)

		for t := range timer {
			conn.WriteMessage(websocket.TextMessage, []byte(fmt.Sprint(t)))
		}

	})

	http.ListenAndServe(":80", handler)
}
