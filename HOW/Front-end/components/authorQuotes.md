```js
// const lyricBtn = getElement('.lyric__button');
// const lyricDOM = getElement('.sing-a-song');

// lyricBtn.addEventListener('click', (e) => {
//     e.currentTarget
//     lyricDOM.classList.toggle('show')
// })

```
```html
			<div class="lyric__container">
				<div class="lyric__button">
					<i class="fa-brands fa-d-and-d"></i>
					<!-- <div class="sing-a">
                        <p>SOKUNMARU</p>
                    </div> -->
				</div>
				<div class="sing-a-song">
					<!-- <p>
						<script type="text/javascript">
							quotes = new Array();
							quotes[0] =
								'Hôm nay bạn ổn chứ? Nếu không, bạn có muốn kể với tôi không?';
							quotes[1] =
								'Vận mệnh, vốn là thứ không thể thay đổi…phải không?';
							quotes[2] =
								'Cám ơn bạn đã dành thời gian, chúc một ngày tốt lành!';
							quotes[3] =
								'Xin chào, tôi là S.R Dragonfang. Hôm nay bạn thế nào?';
							quotes[4] =
								'Bạn có biết là bạn có thể bấm vào để trả lời không?';
							quotes[5] =
								'Bạn có biết, tại sao bông hồng lại có gai không?';
							quotes[6] =
								'Giữa đèn đỏ và đèn xanh...khoảng cách ba giây ngắn ngủi ấy...là ánh đèn vàng nhấp nháy trên đèn giao thông...làm đầu óc ta trở nên rối bời...chẳng biết bản thân đang đi nhanh...hay đi chậm...vì giờ trước mắt ta, chỉ thấy một màu vàng mà thôi!';
							randomquote = Math.random() * quotes.length;
							randomquote = Math.floor(randomquote);
							document.write(quotes[randomquote]);
						</script>
					</p> -->
					<p>
						Bạn hãy thật nâng niu...những điều gần gũi với bạn
						nhất...bạn có hiểu rằng càng gần gũi với điều gì bao
						nhiêu...thì sẽ càng khó để nhận ra chính
						nó............Vậy hãy giải thích cho mình cảm giác hạnh
						phúc mà bạn vừa mới biết tới...hoặc chăng bạn đã quá
						hạnh phúc...tới mức bạn không còn nhớ nữa? Rằng bạn đang
						sống ở đây. Rằng bạn đang sống đầy sinh lực. Tất cả đều
						là những phép màu nhỏ bé...chỉ là những phép màu mà
						thôi.
					</p>
				</div>
			</div>
```

```scss
.lyric__container {
	// flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
    overflow: hidden;

	& .lyric__button {
        @extend .menu-item;
	}

	& .sing-a-song {
        display: none;
        width: calc(100vw - 2rem - 265px);
        overflow: hidden;
		right: 0;

        & p {            
            position: relative;
            font-size: 2.5rem;
            white-space: nowrap;
            animation: text-moving 23s linear;
        }

		@keyframes text-moving {
			from {
                right: -100%;
				// width: 0%;
			}
			to {
				right: 160%;
			}
		}
	}
}
```