import 'package:flutter/material.dart';

class NewsPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻页面",                
                  style: TextStyle(
                      color:Colors.red
                    ),
                )
      ),
      body:Center(
        child: Text("This is new route"),
      ),
    );
  }
}