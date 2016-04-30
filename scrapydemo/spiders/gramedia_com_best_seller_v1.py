from scrapy import Spider


class GramediaComBestSellerV1Spider(Spider):
    name = 'gramedia.com_best_seller_v1'
    allowed_domains = ['gramedia.com']
    start_urls = ['http://www.gramedia.com/catalog/category/best/']

    def parse(self, response):
        for sel in response.css("ul.products-grid li.item"):
            book = {}
            book['title'] = sel.css("h2.product-name > a::text").extract_first()
            book['author'] = sel.css("h2.product-author::text").extract_first()
            book['url'] = sel.css("a.product-image::attr(href)").extract_first()
            book['image_url'] = sel.css("a.product-image > img::attr(src)").extract_first()
            book['original_price'] = sel.css("#old-price-::text").extract_first()
            book['final_price'] = sel.css("#product-price-::text").extract_first()
            if book['final_price'] is None:
                book['final_price'] = sel.css("#product-price- > span::text").extract_first()
            rating = sel.css("div.rating::attr(style)").re(r'width:(\d+%)')
            if rating:
                book['rating'] = rating[0]

            yield book
