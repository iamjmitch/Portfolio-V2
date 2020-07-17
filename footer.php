
<footer>
<div id="footer" class="full-width white bst">
	<p class="flex jc-c">
	Copyright &copy; 2019 James Mitchell</p>
	<div class="flex jc-c">
	 <img id="logofooter" src="./assests/images/logosmall.png" alt="">
	</div>
	<div id="reCAPTCHA">
	This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
	</div>

</div>
</footer>
</body>
<script src="./js/iamjmitch.js"></script>
<script>
        grecaptcha.ready(function () {
            grecaptcha.execute('6LfhNLIZAAAAAJMB2AZeIZiIKMu9F3hugeC1mVru', { action: 'contact' }).then(function (token) {
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
            });
        });
    </script>
</html>