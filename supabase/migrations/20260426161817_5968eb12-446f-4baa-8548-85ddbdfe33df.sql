CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  suburb TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can submit a quote request
CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view submissions (prevents public scraping of contact info)
CREATE POLICY "Authenticated users can view quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (true);