package utils

type utils struct{}

type Restful struct {
	Code int                    `json:"code"`
	Msg  string                 `json:"msg"`
	Data map[string]interface{} `json:"data"`
}

func Utils() *utils {
	return &utils{}
}

func (u *utils) GetPaths() Restful {
	return Restful{
		Code: 200,
		Msg:  "success",
	}
}
