-- Normalize the canonical volume labels and titles for all 365 Daily Light entries.
-- The collection uses twelve consecutive volumes with fixed day boundaries.

update public.daily_light_entries
set
  volume = case
    when day between 1 and 30 then 'Volume One'
    when day between 31 and 60 then 'Volume Two'
    when day between 61 and 90 then 'Volume Three'
    when day between 91 and 120 then 'Volume Four'
    when day between 121 and 150 then 'Volume Five'
    when day between 151 and 180 then 'Volume Six'
    when day between 181 and 210 then 'Volume Seven'
    when day between 211 and 240 then 'Volume Eight'
    when day between 241 and 270 then 'Volume Nine'
    when day between 271 and 300 then 'Volume Ten'
    when day between 301 and 330 then 'Volume Eleven'
    when day between 331 and 365 then 'Volume Twelve'
  end,
  volume_title = case
    when day between 1 and 30 then 'Walking in the Light'
    when day between 31 and 60 then 'Growing in Grace'
    when day between 61 and 90 then 'Living the Kingdom'
    when day between 91 and 120 then 'The Heart of Worship'
    when day between 121 and 150 then 'Faith Through the Storm'
    when day between 151 and 180 then 'The Character of Christ'
    when day between 181 and 210 then 'Serving the King'
    when day between 211 and 240 then 'Hope in Every Season'
    when day between 241 and 270 then 'Walking in Wisdom'
    when day between 271 and 300 then 'The Life of Faith'
    when day between 301 and 330 then 'The Heart of Prayer'
    when day between 331 and 365 then 'The Way of Wisdom'
  end
where day between 1 and 365
  and (
    volume is distinct from case
      when day between 1 and 30 then 'Volume One'
      when day between 31 and 60 then 'Volume Two'
      when day between 61 and 90 then 'Volume Three'
      when day between 91 and 120 then 'Volume Four'
      when day between 121 and 150 then 'Volume Five'
      when day between 151 and 180 then 'Volume Six'
      when day between 181 and 210 then 'Volume Seven'
      when day between 211 and 240 then 'Volume Eight'
      when day between 241 and 270 then 'Volume Nine'
      when day between 271 and 300 then 'Volume Ten'
      when day between 301 and 330 then 'Volume Eleven'
      when day between 331 and 365 then 'Volume Twelve'
    end
    or volume_title is distinct from case
      when day between 1 and 30 then 'Walking in the Light'
      when day between 31 and 60 then 'Growing in Grace'
      when day between 61 and 90 then 'Living the Kingdom'
      when day between 91 and 120 then 'The Heart of Worship'
      when day between 121 and 150 then 'Faith Through the Storm'
      when day between 151 and 180 then 'The Character of Christ'
      when day between 181 and 210 then 'Serving the King'
      when day between 211 and 240 then 'Hope in Every Season'
      when day between 241 and 270 then 'Walking in Wisdom'
      when day between 271 and 300 then 'The Life of Faith'
      when day between 301 and 330 then 'The Heart of Prayer'
      when day between 331 and 365 then 'The Way of Wisdom'
    end
  );