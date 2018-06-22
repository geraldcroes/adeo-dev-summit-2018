package main // import "github.com/juliens/demo"

import (
	"net/http"

	assetfs "github.com/elazarl/go-bindata-assetfs"
	"github.com/juliens/demo/autogen/genstatic"
)

func main() {
	http.ListenAndServe(":80", http.FileServer(&assetfs.AssetFS{Asset: genstatic.Asset, AssetInfo: genstatic.AssetInfo, AssetDir: genstatic.AssetDir, Prefix: "static"}))
}
