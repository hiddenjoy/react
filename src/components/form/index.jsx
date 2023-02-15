export const SignUpForm = () => {
    return (
        <div>
            <form>
                <label required for="email">
                    *email:
                </label>
                <input type="text" name="email" />
                <label required for="password">
                    *passoword:
                </label>
                <input type="text" name="password" />
                <label for="confirm_password">*passoword 확인: </label>
                <input type="text" name="confirm_password" />
                <label for="name">이름:</label>
                <input type="text" name="username" />
                <label for="college">대학: </label>
                <input type="text" name="college" />
                <label for="major">전공: </label>
                <input type="text" id="major" />
                <button type="submit" text="Sign up !" />
            </form>
        </div>
    );
};

export const SignInForm = () => {
    return (
        <div>
            <form>
                <label required for="email">
                    *email:
                </label>
                <input type="text" name="email" />
                <label required for="password">
                    *passoword:
                </label>
                <input type="text" name="password" />
            </form>
        </div>
    );
};