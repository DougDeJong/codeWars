SELECT * FROM departments d
  WHERE EXISTS (
  SELECT * FROM sales s
  WHERE d.id = s.department_id)
  AND EXISTS ( 
  SELECT * FROM sales s
  WHERE s.price > 98.00)