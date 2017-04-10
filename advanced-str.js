String.prototype.format = function () {

    var temp = this,
        i;

    if (arguments.length) {

        for (i = 0; i < arguments.length; i++)
            temp = temp.replace('%{' + i + '}', arguments[i]);

        return temp;

    } else return this.replace();


}

// var userInfo = "Username: %{0}, Age: %{1}, Country: %{2}";
// userInfo.format('Admin',26,'Turkey');
// Output: "Username: Admin, Age: 26, Country: Turkey"
