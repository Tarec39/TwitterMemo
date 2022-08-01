package main
import(
	"net/http"
	"fmt"
)

func main(){
	http.HandleFunc("/", HelloHandler) // ハンドラを登録してウェブページを表示させる
	http.ListenAndServe(":8080", nil) //起動
}

func HelloHandler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello World")
}