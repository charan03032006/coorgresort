-- Expand the client site from Coorg-only discovery to the full Mysuru + Coorg travel corridor.
-- Run this migration after the original Coorg Manju content migration/seed.

insert into public.destinations (id,name,slug,description,image,hotel_count)
values
('00000000-0000-0000-0000-000000000006','Mysuru','mysuru','Royal heritage, palaces, temples, gardens, food and family experiences — the ideal gateway before a Coorg stay.','https://images.pexels.com/photos/14520302/pexels-photo-14520302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',1),
('00000000-0000-0000-0000-000000000007','Mysuru–Coorg Route','mysuru-coorg-route','A convenient travel corridor connecting Mysuru with the coffee hills of Coorg, with stops for heritage, nature, food and family experiences.','https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',0)
on conflict (id) do update set name=excluded.name, slug=excluded.slug, description=excluded.description, image=excluded.image, hotel_count=excluded.hotel_count;

insert into public.experiences (id,name,description,image,sort_order,is_active)
values
('30000000-0000-0000-0000-000000000008','Mysuru Palace','Explore Mysuru’s iconic royal palace and the heritage that defines the city.','https://images.pexels.com/photos/14520302/pexels-photo-14520302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',8,true),
('30000000-0000-0000-0000-000000000009','Chamundi Hills','Visit Chamundeshwari Temple and enjoy panoramic views over Mysuru.','https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',9,true),
('30000000-0000-0000-0000-000000000010','Brindavan Gardens','Enjoy landscaped gardens and the famous evening fountain experience near KRS.','https://images.pexels.com/photos/1582517/pexels-photo-1582517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',10,true),
('30000000-0000-0000-0000-000000000011','Srirangapatna','Discover heritage, temples and historic landmarks on the Mysuru–Coorg travel corridor.','https://images.pexels.com/photos/1287124/pexels-photo-1287124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',11,true),
('30000000-0000-0000-0000-000000000012','Mysuru Zoo & Karanji Lake','A family-friendly combination of wildlife, nature and relaxed city sightseeing.','https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',12,true),
('30000000-0000-0000-0000-000000000013','Mysuru Food & Shopping','Discover Mysuru’s local flavours, sweets, markets, silk and sandalwood traditions.','https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',13,true)
on conflict (id) do update set name=excluded.name, description=excluded.description, image=excluded.image, sort_order=excluded.sort_order, is_active=excluded.is_active;

insert into public.travel_guides (id,title,description,image,category,sort_order,is_published)
values
('40000000-0000-0000-0000-000000000007','Mysuru to Coorg Travel Guide','Plan a smooth Mysuru–Coorg journey with sightseeing, food, stays and vehicle options along the route.','https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940','Mysuru & Coorg',7,true),
('40000000-0000-0000-0000-000000000008','Best Places in Mysuru','Mysuru Palace, Chamundi Hills, Brindavan Gardens, Mysuru Zoo and more for a complete city stay.','https://images.pexels.com/photos/14520302/pexels-photo-14520302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940','Mysuru',8,true),
('40000000-0000-0000-0000-000000000009','Mysuru + Coorg Family Trip','A practical family itinerary combining heritage, wildlife, gardens, coffee country and relaxed stays.','https://images.pexels.com/photos/1571738/pexels-photo-1571738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940','Family Travel',9,true)
on conflict (id) do update set title=excluded.title, description=excluded.description, image=excluded.image, category=excluded.category, sort_order=excluded.sort_order, is_published=excluded.is_published;
