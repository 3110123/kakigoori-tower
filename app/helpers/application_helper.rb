module ApplicationHelper
  def default_meta_tags
    {
      site: 'かき氷タワー',
      title: 'かき氷タワー',
      reverse: true,
      charset: 'utf-8',
      separator: '|',
      description: 'ボタンを連打してかき氷を積み上げるゲームです。',
      keywords: 'かき氷タワー',
      canonical: request.original_url,
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        image: image_url('ogp_twitter_card.png'),
        locale: 'ja_JP'
      },
      twitter: {
        site: '@st3110123',
        card: 'summary_large_image',
        image: image_url('ogp_twitter_card.png')
      }
    }
  end
end
