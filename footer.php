
<footer>
<div id="footer" class="full-width white bst">
	<p class="flex jc-c">
	Copyright &copy; 2019 James Mitchell</p>
	<div class="flex jc-c">
	 <img id="logofooter" src="./assests/images/logosmall.png" alt="">
	</div>

</div>
</footer>
</body>
<script src="./js/iamjmitch.js"></script>
<script>
        grecaptcha.ready(function () {
            grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', { action: 'contact' }).then(function (token) {
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
            });
        });
    </script>
</html>