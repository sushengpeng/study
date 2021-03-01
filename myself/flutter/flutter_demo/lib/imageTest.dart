import 'package:flutter/material.dart';

class imageTest extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(
            "图片测试",
            style: TextStyle(
                color: Colors.blue,
                fontSize: 18.0,
                height: 1.2,
                fontFamily: "Courier",
                background: new Paint()..color = Colors.yellow,
                decoration: TextDecoration.underline,
                decorationStyle: TextDecorationStyle.dashed),
          ),
        ),
        body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Image(
                  image: AssetImage('images/icon_gbt.png'),
                  width: 100,
                ),
                Image(
                  image: AssetImage('images/icon_hcp.png'),
                  width: 100,
                ),
                Image(
                  image: AssetImage('images/icon_jp.png'),
                  width: 100,
                ),
                Image(
                  image: AssetImage('images/icon_cxyc.png'),
                  width: 100,
                ),
              ],
            )
        )
    );
  }
}
