/**
 *
 */
class CoreInterface {
    constructor(fnNm) {
        /**
         * CoreInterface Interface 에서 Service를 선언하여 사용하는 것도 가능.
         * Model 바인딩을 하여 추가 테스트 필요.
         */
        console.log('[NODE Initialize Class]', fnNm)
        this.#health_check()
            .then(r => {})
            .catch(err => {});
    }

    async #health_check() {


    }

    async #init() {
    }

    // get userService () { return this.userService };

    /**
     * binding class
     * @return {Promise<void>}
     */
    binding = async () => {

    }
}
module.exports = CoreInterface;