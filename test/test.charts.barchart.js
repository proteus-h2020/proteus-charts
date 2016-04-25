describe('Barchart', function() {
  describe('constructor()', function() {
    //Append default chart div
    var div = document.createElement('div');
    div.innerHTML = '<div id="chart"></div>';
    document.body.appendChild(div);

    it('throws a "Missing constructor parameters" if the data parameter is missing', () => {
      assert.throws(() => {
        new Barchart()
      }, Error, 'Missing constructor parameters');
    });

    it('will construct a bar chart given some data', () => {
      var data = [{ x: 0, y: 1 }, { x: 0, y: 2 }];
      var chart = new Barchart(data);
      assert.isOk(chart);
    });

    it('throws a "Wrong data format" TypeError if data is not an object neither an array', () => {
      var data = 'wrong parameter';
      assert.throws(() => {
        new Barchart(data)
      }, TypeError, 'Wrong data format');
    });

    it('toPNG()', () => {
      var data = [{ x: 0, y: 1 }, { x: 1, y: 2 }];
      var chart = new Barchart(data);
      chart.draw();
      //wait for image creation
      setTimeout(function(){
        var result = chart.toPNG();
        assert.equal(result, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjcwIiBoZWlnaHQ9IjMyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDIwKSI+PGcgY2xhc3M9InggYXhpcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTApIj48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjE8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OSwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MjwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MzwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3NywwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNiwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NTwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3NSwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NjwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNCwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+NzwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3MywwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+ODwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMiwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+OTwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3MSwwKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB5Mj0iNiIgeDI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjcxZW0iIHk9IjkiIHg9IjAiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogbWlkZGxlOyI+MTA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MjAsMCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeTI9IjYiIHgyPSIwIj48L2xpbmU+PHRleHQgZHk9Ii43MWVtIiB5PSI5IiB4PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiPjEyPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTY5LDApIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxsaW5lIHkyPSI2IiB4Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuNzFlbSIgeT0iOSIgeD0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7Ij4xMzwvdGV4dD48L2c+PHBhdGggY2xhc3M9ImRvbWFpbiIgZD0iTTAsNlYwSDYwMFY2Ij48L3BhdGg+PC9nPjxnIGNsYXNzPSJ5IGF4aXMiIHN0cm9rZS1kYXNoYXJyYXk9IjUsIDUiPjxnIGNsYXNzPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI1MCkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxNzYuNDcwNTgxMDU0Njg3NSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4xMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTAyLjk0MTE3NzM2ODE2NDA2KSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48bGluZSB4Mj0iNjAwIiB5Mj0iMCI+PC9saW5lPjx0ZXh0IGR5PSIuMzJlbSIgeD0iLTIwIiB5PSIwIiBzdHlsZT0idGV4dC1hbmNob3I6IGVuZDsiPjIwPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyOS40MTE3NjQxNDQ4OTc0NikiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGxpbmUgeDI9IjYwMCIgeTI9IjAiPjwvbGluZT48dGV4dCBkeT0iLjMyZW0iIHg9Ii0yMCIgeT0iMCIgc3R5bGU9InRleHQtYW5jaG9yOiBlbmQ7Ij4zMDwvdGV4dD48L2c+PHBhdGggY2xhc3M9ImRvbWFpbiIgZD0iTTAsMEgwVjI1MEgwIj48L3BhdGg+PHRleHQ+PC90ZXh0PjwvZz48cmVjdCBjbGFzcz0iYmFyIiBoZWlnaHQ9IjIyLjA1ODgyMzUyOTQxMTc2OCIgZmlsbD0iIzFmNzdiNCIgeT0iMjI3Ljk0MTE3NjQ3MDU4ODIzIiB3aWR0aD0iNDQiIHg9IjgiPjwvcmVjdD48cmVjdCBjbGFzcz0iYmFyIiBoZWlnaHQ9Ijg4LjIzNTI5NDExNzY0NzA3IiBmaWxsPSIjYWVjN2U4IiB5PSIxNjEuNzY0NzA1ODgyMzUyOTMiIHdpZHRoPSI0NCIgeD0iNTciPjwvcmVjdD48cmVjdCBjbGFzcz0iYmFyIiBoZWlnaHQ9IjE1NC40MTE3NjQ3MDU4ODIzOCIgZmlsbD0iI2ZmN2YwZSIgeT0iOTUuNTg4MjM1Mjk0MTE3NjQiIHdpZHRoPSI0NCIgeD0iMTA2Ij48L3JlY3Q+PHJlY3QgY2xhc3M9ImJhciIgaGVpZ2h0PSIzNi43NjQ3MDU4ODIzNTI5NTYiIGZpbGw9IiNmZmJiNzgiIHk9IjIxMy4yMzUyOTQxMTc2NDcwNCIgd2lkdGg9IjQ0IiB4PSIxNTUiPjwvcmVjdD48cmVjdCBjbGFzcz0iYmFyIiBoZWlnaHQ9IjM2Ljc2NDcwNTg4MjM1Mjk1NiIgZmlsbD0iIzJjYTAyYyIgeT0iMjEzLjIzNTI5NDExNzY0NzA0IiB3aWR0aD0iNDQiIHg9IjIwNCI+PC9yZWN0PjxyZWN0IGNsYXNzPSJiYXIiIGhlaWdodD0iMjUwIiBmaWxsPSIjOThkZjhhIiB5PSIwIiB3aWR0aD0iNDQiIHg9IjI1MyI+PC9yZWN0PjxyZWN0IGNsYXNzPSJiYXIiIGhlaWdodD0iMjkuNDExNzY0NzA1ODgyMzQ4IiBmaWxsPSIjZDYyNzI4IiB5PSIyMjAuNTg4MjM1Mjk0MTE3NjUiIHdpZHRoPSI0NCIgeD0iMzAyIj48L3JlY3Q+PHJlY3QgY2xhc3M9ImJhciIgaGVpZ2h0PSI4OC4yMzUyOTQxMTc2NDcwNyIgZmlsbD0iI2ZmOTg5NiIgeT0iMTYxLjc2NDcwNTg4MjM1MjkzIiB3aWR0aD0iNDQiIHg9IjM1MSI+PC9yZWN0PjxyZWN0IGNsYXNzPSJiYXIiIGhlaWdodD0iMjM1LjI5NDExNzY0NzA1ODgiIGZpbGw9IiM5NDY3YmQiIHk9IjE0LjcwNTg4MjM1Mjk0MTE4IiB3aWR0aD0iNDQiIHg9IjQwMCI+PC9yZWN0PjxyZWN0IGNsYXNzPSJiYXIiIGhlaWdodD0iMTEwLjI5NDExNzY0NzA1ODgxIiBmaWxsPSIjYzViMGQ1IiB5PSIxMzkuNzA1ODgyMzUyOTQxMiIgd2lkdGg9IjQ0IiB4PSI0NDkiIGZpbGwtb3BhY2l0eT0iMSI+PC9yZWN0PjxyZWN0IGNsYXNzPSJiYXIiIGhlaWdodD0iMTQuNzA1ODgyMzUyOTQxMTg4IiBmaWxsPSIjOGM1NjRiIiB5PSIyMzUuMjk0MTE3NjQ3MDU4OCIgd2lkdGg9IjQ0IiB4PSI0OTgiPjwvcmVjdD48cmVjdCBjbGFzcz0iYmFyIiBoZWlnaHQ9IjM2Ljc2NDcwNTg4MjM1Mjk1NiIgZmlsbD0iI2M0OWM5NCIgeT0iMjEzLjIzNTI5NDExNzY0NzA0IiB3aWR0aD0iNDQiIHg9IjU0NyI+PC9yZWN0PjwvZz48L3N2Zz4=');
      }, 300);
    });

  });
});