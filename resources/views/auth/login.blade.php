@extends('layouts.app')

@section('content')
<section class="hero is-light is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-grey">{{ __('Login') }}</h3>
                <p class="subtitle has-text-grey">Пожалуйста, войдите, чтобы продолжить.</p>
                
                <div class="box">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="field">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="control">
                                <input id="email" type="email" class="input is-large{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="field">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="control">
                                <input id="password" type="password" class="input is-large{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="field">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                       Запомнить меня
                                    </label>
                                </div>
                            </div>
                        </div>
                
                        <button type="submit" class="button is-block is-info is-large is-fullwidth">
                            Войти
                        </button>
                    </form>
                </div>
                <p class="has-text-grey">
                    @if (Route::has('password.request'))
                        <a class="" href="{{ route('password.request') }}">
                            Забыли пароль?
                        </a>
                    @endif
                </p>
                <hr>
                <div class="box">
                    <div class="field">
                        <label for="demotest" class="col-md-4 col-form-label text-md-right">Тестовый доступ</label>

                        <div class="control has-icons-left">
                            <input id="demotest" type="email" class="input is-warning" value="demotest@demotest.ru" readonly>
                            <span class="icon is-small is-left">
                                <i class="fas fa-beer"></i>
                            </span>
                        </div>

                        <p>Пароль:</p>
                        <code>demotest</code>
                        <!-- 111111 -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
@endsection
