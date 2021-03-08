import 'package:flutter/material.dart';
import 'dart:ui';

class TestImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("图片测试"),
      ),
      body: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                  Image(
                    image: AssetImage("images/icon_cxyc.png"), width: 50.0
                  ),
                  // Text(""),
                  Image(
                    image: AssetImage("images/icon_gbt.png"), width: 50.0
                  ),
                  Image(
                    image: AssetImage("images/icon_jp.png"), width: 50.0
                  ),
                  Image(
                    image: AssetImage("images/icon_hcp.png"), width: 50.0
                  ),
                  Image(
                    image: NetworkImage("https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2114744496,2811550658&fm=218&app=92&f=PNG?w=121&h=75&s=4B6583426BAAB2490E55F50D030070C3"), width: 100.0
                  ),
          ]
          )
      ),
    );
  }
}
